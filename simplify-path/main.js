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

  for (let i = 0; i < pathDirs.length; i++) {
    if (pathDirs[i] == "..") {
      pathDirs = pathDirs.slice(0, i-1).concat(pathDirs.slice(i+1, pathDirs.length))
    }
    
    if (i > 0 && i <= pathDirs.length - 1 && pathDirs[i] == "") {
        pathDirs = pathDirs.slice(0, i).concat(pathDirs.slice(i+1, pathDirs.length))
    }
  }

  return "/" + pathDirs.join("/");
};

console.log(simplifyPath("/.../a/../b/c/../d/./"));
console.log(simplifyPath("/home//foo/"))
