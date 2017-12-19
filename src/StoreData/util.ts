import {  TreeNode, ExtendedData, ExtMap } from "../interfaces/data-models"


 export function mapToTree(_NodeSnapshotMap:ExtMap<ExtendedData<TreeNode>>) {
  var idToNodeMap = _NodeSnapshotMap;
  let rootNode : ExtendedData<TreeNode>
  let NodeSnapshotMap = _NodeSnapshotMap as ExtMap<ExtendedData<TreeNode>>
  /*
  NodeSnapshotMap.forEach(nodeSnapshot=>{
      idToNodeMap[nodeSnapshot.id] = nodeSnapshot
      delete nodeSnapshot.$sons
  })
  */

  NodeSnapshotMap.forEach((datum) => {
    datum.ext = datum.ext || {}
    if (! datum.data.parentId) {
      rootNode = datum;
      delete rootNode.ext.$sons
    }
      else
      {
      let parentNode : ExtendedData<TreeNode> = idToNodeMap.get(datum.data.parentId);
      datum.ext.$parent = parentNode;
      parentNode.ext = parentNode.ext || {}
        if (!parentNode.ext.$sons)
          parentNode.ext.$sons = [];
        parentNode.ext.$sons.push(datum);
      }
  })
  console.log(rootNode);

  return rootNode;// { rootsArray: rootsArray, idToNodeMap:idToNodeMap };

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