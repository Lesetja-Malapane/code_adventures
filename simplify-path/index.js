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

  for (let i = 0; i < pathDirs.length; i++) {
    if (pathDirs[i] == "..") {
        pathDirs = pathDirs.slice(0, i-1).concat(pathDirs.slice(i+1, pathDirs.length))
    }
  }

  pathDirs = pathDirs.filter((dir) => dir != ".");

  if (pathDirs.at(-1) == "") {
    pathDirs = pathDirs.slice(0, pathDirs.length - 1);
  }

  return pathDirs;
};

console.log(simplifyPath("/.../a/../b/c/../d/./"));
