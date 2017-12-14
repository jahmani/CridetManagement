export function mapToTree(_NodeSnapshotMap) {
    var idToNodeMap = _NodeSnapshotMap;
    var rootNode;
    var NodeSnapshotMap = _NodeSnapshotMap;
    /*
    NodeSnapshotMap.forEach(nodeSnapshot=>{
        idToNodeMap[nodeSnapshot.id] = nodeSnapshot
        delete nodeSnapshot.$sons
    })
    */
    NodeSnapshotMap.forEach(function (datum) {
        datum.ext = datum.ext || {};
        if (typeof datum.data.parentId === "undefined") {
            rootNode = datum;
            delete rootNode.ext.$sons;
        }
        else {
            var parentNode = idToNodeMap.get(datum.data.parentId);
            datum.ext.$parent = parentNode;
            parentNode.ext = parentNode.ext || {};
            if (!parentNode.ext.$sons)
                parentNode.ext.$sons = [];
            parentNode.ext.$sons.push(datum);
        }
    });
    console.log(rootNode);
    return rootNode; // { rootsArray: rootsArray, idToNodeMap:idToNodeMap };
}
/*
export function ArrayToTree(_NodeSnapshotList:ExtendedData<TreeNode>[]) {
  var idToNodeMap = {};
  let rootNode : TreeNodeDataSnapshot
  let NodeSnapshotList = _NodeSnapshotList as TreeNodeDataSnapshot[]
  NodeSnapshotList.forEach(nodeSnapshot=>{
      idToNodeMap[nodeSnapshot.id] = nodeSnapshot
      delete nodeSnapshot.$sons
  })

  NodeSnapshotList.forEach((datum) => {
    if (typeof datum.data.parentId === "undefined") {
      rootNode = datum;
    }
      else
      {
      let parentNode = idToNodeMap[datum.data.parentId];
      datum.$parent = parentNode;
        if (!parentNode.$sons)
          parentNode.$sons = [];
        parentNode.$sons.push(datum);
      }
  })
  console.log(rootNode);

  return rootNode;// { rootsArray: rootsArray, idToNodeMap:idToNodeMap };

}

*/ 
//# sourceMappingURL=util.js.map