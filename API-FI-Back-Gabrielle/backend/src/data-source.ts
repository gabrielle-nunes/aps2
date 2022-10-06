import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserGAB} from "./entity/UserGab"
import { Gab } from "./entity/GAB"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "UserEN",
    password: "1234",
    database: "faculdade2",
    synchronize: true,
    logging: false,
    entities: [UserGAB,Gab],
    migrations: [],
    subscribers: [],
})
