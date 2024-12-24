import { PrismaClient } from "@prisma/client";

function prismaClientSingleton(){
    return new PrismaClient()
}

declare global{
    var globalPrisma : ReturnType<typeof prismaClientSingleton> | undefined
}

var prisma : ReturnType<typeof prismaClientSingleton> = global.globalPrisma ?? prismaClientSingleton()

if(process.env.NODE_ENV !='production'){
    globalThis.globalPrisma = prisma
}

export default prisma


