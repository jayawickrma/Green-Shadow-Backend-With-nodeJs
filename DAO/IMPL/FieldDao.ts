import {BaseDao} from "../BaseDao";
import {fieldDto} from "../../org.grenshadow/DTO/FieldDTo";

class FieldDao implements BaseDao<fieldDto>{
    create(name: string, list: []) {
    }

    delete(id: number) {
    }

    findAll() {
    }

    update(id: number, name: string, list: []) {
    }

}export default FieldDao;