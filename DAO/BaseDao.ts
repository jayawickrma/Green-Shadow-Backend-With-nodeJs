export interface BaseDao<T>{
    // @ts-ignore
    create(name:string,list:T[]);
    // @ts-ignore
    update(id:number,name:string,list:T[])
    // @ts-ignore
    delete(id:number)
    // @ts-ignore
    findAll()

}