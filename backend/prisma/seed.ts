import prisma from "../db";

async function main(){
     const res = await prisma.students.createMany({
        data : [
            {
            StudentName: "Debashish", 
            Cohort : "2024-25" , 
            LastLogin : new Date(),
            currClass : "9",
            Status : "Green" , 
        },
            {
            StudentName: "Ashish", 
            Cohort : "2024-25" , 
            LastLogin : new Date(),
            currClass : "9",
            Status : "Red" , 
        },
            {
            StudentName: "Aabid", 
            Cohort : "2024-25" , 
            LastLogin : new Date(),
            currClass : "9",
            Status : "Green" , 
        },
            {
            StudentName: "Rohit", 
            Cohort : "2024-25" , 
            LastLogin : new Date(),
            currClass : "9",
            Status : "Red" , 
        },
        ]
    })
}


main().then(async ()=>{
    await prisma.$disconnect()
}).catch(async (e)=>{
})