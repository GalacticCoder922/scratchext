class TrueFalse {
    getInfo() {
        return {
            "id": "TrueFalse",
            "name": "TrueFalse",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "boolean",
                    "text": "true",
                    }
                },
            }],
        "menus": {
        }
    };
    substringy {
        return true;
    };
}
Scratch.extensions.register(new TrueFalse());
