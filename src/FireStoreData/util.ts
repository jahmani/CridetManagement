export function conatctPaths(...parts : string[]):string{
    return pathJoin(parts,'/')
}

function pathJoin(parts, sep){
    var separator = sep || '/';
    var replace   = new RegExp(separator+'{1,}', 'g');
    return parts.join(separator).replace(replace, separator);
 }

