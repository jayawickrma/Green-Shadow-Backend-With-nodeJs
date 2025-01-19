export interface BaseDao<T>{

    create(name:string,list:T[]);
    update(id:number,name:string,list:T[])
    delete(id:number)
    findAll()

}