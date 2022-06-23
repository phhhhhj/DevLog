const fs = require("fs");
const path = require('path');

function getSidebar() {
  const root = getRoot() + '/docs';

  let sidebarArr = [];
  let HomeArr = [];
  const filelist = fs.readdirSync(root);
  filelist.forEach((file) => {
    if (file === ".vuepress") return;
    if (file.charAt(0) === "_") return;

    const filePath = root + "/" + file;
    const stat = fs.lstatSync(filePath);

    // stat이 directory인 경우
    if (stat.isDirectory()) {
      const dirFilelist = fs.readdirSync(filePath);
      sidebarArr.push(getSidebarChildren(file, dirFilelist));
    } else {  // stat이 파일인 경우
      HomeArr.push(file);
    }
  });

  sidebarArr.unshift(getSidebarChildren("", HomeArr));

  return sidebarArr;
}

function getRoot() {
  return path.resolve(process.cwd());
};

function getSidebarChildren(dir, fileList) {
  const dirPath = dir ? "/" + dir + "/" : "/";
  fileList = aheadOfReadme(fileList);  // README.md 맨 앞으로 정렬

  let tmpMdfileList = [];

  fileList.forEach((mdfile) => {
    if (mdfile.substr(-3) === ".md") {
      mdfile = mdfile.slice(0, -3) === "README" ? "" : mdfile.slice(0, -3);  // .md 지우기
      tmpMdfileList.push(dirPath + mdfile);  // link 추가
    }
  });

  fileList = tmpMdfileList;

  return {
    title: dir ? dir : "HOME",
    children: fileList
  };
}

function aheadOfReadme(arr) {
  // README.md 맨 앞으로 보내기
  const readmeIdx = arr.indexOf("README.md");
  if (readmeIdx > 0) {
    arr.unshift(arr.splice(readmeIdx, 1)[0]);
  }
  return arr;
}

module.exports = {
  getSidebar
}