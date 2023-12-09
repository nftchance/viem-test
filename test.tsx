import { hexToBytes } from "viem";

function main() {
    const address = "0x";
    const bytes = hexToBytes(address, { size: 32 });
    console.log(bytes);
}

main();
