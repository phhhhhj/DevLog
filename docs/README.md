# Spring AOP

# AOP란

- Aspect Oriented Programming, 관점 지향 프로그래밍
- 핵심기능(Core Concerns)에서 부가기능(Cross-cutting Concerns)을 분리해서 모듈화하는 프로그래밍 기법

![Untitled](Spring%20AOP%20b1debdd992ab41cdbf605734bda97c4f/Untitled.png)

![Untitled](Spring%20AOP%20b1debdd992ab41cdbf605734bda97c4f/Untitled%201.png)

# AOP 용어

- 핵심기능 : Core Concern(Primary Concern), 비즈니스 로직 구현
- 부가기능 : Cross-cutting Concern, Advice 라고 하기도 함
- Point-cut : 부가기능을 어디에 끼워넣는지에 대한 위치정보가 들어있는 문법
- weaving : runtime시에 부가기능을 핵심기능에 끼워넣는 것
- Aspect : Cross-cutting Concern + Point-cut
              스프링에서는 Advisor라고 하기도 함

![Untitled](Spring%20AOP%20b1debdd992ab41cdbf605734bda97c4f/Untitled%202.png)

# SpringBoot에서 AOP 사용하기

## 1. pom.xml

```xml
<!-- AOP 라이브러리 추가 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

## 2. main method

```java
@EnableAspectJAutoProxy  // main method에 Aspect annotation 적용
@SpringBootApplication
public class SpringdemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringdemoApplication.class, args);
	}
}
```

## 3. Advice or Aspect 정의

```java
@Aspect  // @Aspect 선언
@Component
public class LogAspect {

    // Aspect 안의 method가 사실상의 cross cutting concern이 됨(method 하나가 Advice)

    /** point-cut 문법
     * Spring AOP의 경우 method 호출의 경우에만 weaving이 가능함
     * -> 어떤 method가 호출될 때, 이 cross cutting concern을 weaving하라는 내용
     *
     * 아래 예시
     * UserService의 모든 method가 호출될 때 이 Advice를 호출하라
     * @Around : method 호출 전후에 모두 실헹
     * 첫번째 *의 의미 : 모든 return type
     * 두번째 *의 의미 : 모든 method
     * 두번째 * 뒤에 붙는 (..)의 의미 : 모든 parameter
     *
     * 다른 예시
     * execution(* com.acompany.springdemo.service.*.get*(..))
     * -> service package 내의 모든 class의 get으로 시작하는 모든 method
     */
    @Around("execution(* com.acompany.springdemo.service.UserService.*(..))")
    public Object logging(ProceedingJoinPoint pjp) throws Throwable {
        Object result = pjp.proceed();
        return result;
    }
}
```

### Advice 종류

| @Before | target method가 호출되기 전에 Advice 기능 수행 |
| --- | --- |
| @After | target method의 결과가 성공이든 예외든 관계없이
target method가 완료되면 Advice 기능 수행 |
| @AfterReturning | target method가 성공적으로 결과값을 반환하면 Advice 기능 수행
결과값을 받아서 작업이 가능함 |
| @AfterThrowing | target method가 수행 중 예외를 던지면 Advice 기능 수행 |
| @Around | target method 호출 전과 후에 Advice 기능 수행 |

# Annotation을 이용한 AOP

## 1. Annotation 작성

```java
/**
 * @Retention
 * custom annotation 생성시 해당 annotation이 언제까지 살아 남아 있을지(실제로 적용, 유지되는 범위) 결정
		 * RetentionPolicy.SOURCE : 소스 코드(.java)까지 살아 남음
		 * RetentionPolicy.CLASS : 클래스 파일(.class)까지 살아 남음
		 * RetentionPolicy.RUNTIME : runtime까지 살아 남음(사실상 안 사라진다고 보면 됨)
 *
 * @Target
 * custom annotation이 적용될 대상을 지정하는 annotation
		 * ElementType.PACKAGE : 패키지 선언
		 * ElementType.TYPE : 타입 선언
		 * ElementType.ANNOTATION_TYPE : 어노테이션 타입 선언
		 * ElementType.CONSTRUCTOR : 생성자 선언
		 * ElementType.FIELD : 멤버 변수 선언
		 * ElementType.LOCAL_VARIABLE : 지역 변수 선언
		 * ElementType.METHOD : 메서드 선언
		 * ElementType.PARAMETER : 전달인자 선언
		 * ElementType.TYPE_PARAMETER : 전달인자 타입 선언
		 * ElementType.TYPE_USE : 타입 선언
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)  // method 선언시 사용
public @interface TokenRequired {  // TokenRequired라는 이름의 annotation 생성
}
```

## 2. Advice or Aspect 정의

```java
@Aspect
@Component
public class TokenRequiredAspect {

    /**
     * Advice의 parameter로 적힌 annotation명을 적어줌
     * -> tokenRequired라는 annotation이 적힌 method에 이 Advice가 weaving됨
     */
    @Before("@annotation(tokenRequired)")
    public void tokenRequiredWithAnnotation(TokenRequired tokenRequired) throws Throwable{
        System.out.println("Before tokenRequiredWithAnnotation");
    }
}
```

## 3. Advice 적용

```java
@ResponseBody
@RequestMapping("/test/aop/with/annotation")
@TokenRequired  // Advice 적용
public Map<String, Object> testAOPAnnotation(){
    Map<String, Object> map = new LinkedHashMap<>();
    map.put("result", "Aloha");
    return map;
}
```