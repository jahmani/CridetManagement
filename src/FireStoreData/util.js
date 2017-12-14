export function conatctPaths() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return pathJoin(parts, '/');
}
function pathJoin(parts, sep) {
    var separator = sep || '/';
    var replace = new RegExp(separator + '{1,}', 'g');
    return parts.join(separator).replace(replace, separator);
}
//# sourceMappingURL=util.js.map