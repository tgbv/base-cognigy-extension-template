import { createNodeDescriptor, INodeFunctionBaseParams } from "@cognigy/extension-tools";

export default createNodeDescriptor({
    type: "base-node",
    defaultLabel: "base-node",
    summary: "",
    constraints: {
        placement: {},
        collapsable: true,
        creatable: true,
        deletable: true,
        editable: true,
        movable: true,
    },
    appearance: {
        color: "white",
        textColor: "black",
        variant: "regular",
    },
    dependencies: {
        children: [],
    },
    fields: [
        {
            key: "contractId",
            label: "Contract id provided by the user",
            type: "text",
            params: {
                required: true,
            },
        },
    ],

    function: async (params: INodeFunctionBaseParams) => {
        const cognigy = params.cognigy;
        const config: Record<string, any> = params.config;

        cognigy.api.say(`Hello! The contract number is: ${config.contractId}`);

        
    },
})