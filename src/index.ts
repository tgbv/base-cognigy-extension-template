import { createExtension, INodeFunctionBaseParams } from "@cognigy/extension-tools";

import baseNode from "./nodes/baseNode";

export default createExtension({
  nodes: [
    baseNode
  ]
});
