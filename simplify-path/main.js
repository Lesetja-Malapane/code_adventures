/** '.' -> represent current
 *  '..' -. previous
 *  '/' -> single-slash for multiple
 *  '.'Count > 2 == "valid file name"
 */

/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function (path = "") {
  let pathDirs = path.split("/");
  
  pathDirs = pathDirs.filter(dir => dir != "")
  pathDirs = pathDirs.filter(dir => dir != ".")

  while (pathDirs.includes("..")) {
    let i = pathDirs.indexOf("..")
    pathDirs = pathDirs.slice(0, i-1).concat(pathDirs.slice(i+1, pathDirs.length))
  }
  
  return "/" + pathDirs.join("/");
};

console.log(simplifyPath("/a/./b/../../c/"))

// console.log(simplifyPath("/.../a/../b/c/../d/./"))
// console.log(simplifyPath("/home//foo/"))
