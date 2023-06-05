class TrueFalse {
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
Scratch.extensions.register(new TrueFalse());
