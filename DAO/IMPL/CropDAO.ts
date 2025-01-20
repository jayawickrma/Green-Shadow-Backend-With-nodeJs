import {BaseDao} from "../BaseDao";
import {CropDTO} from "../../org.grenshadow/DTO/CropDTO";

class CropDAO implements BaseDao<CropDTO>{
    create(name: string, list: CropDTO[]) {
        
    }

    delete(id: number) {
    }

    findAll() {
    }

    update(id: number, name: string, list: CropDTO[]) {
    }

}export default CropDAO;