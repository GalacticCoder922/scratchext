class NitroBlock {
    getInfo() {
        return {
            "id": "NitroBlock",
            "name": "NitroBlock",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "boolean",
                    "text": "true",
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    substringy {
        return true;
    };
}
