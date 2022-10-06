import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserGAB} from "./entity/UserGab"
import { PacientesGAB } from "./entity/PacientesGAB"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "gabrielle",
    password: "sjp@2022",
    database: "faculdade",
    synchronize: true,
    logging: false,
    entities: [UserGAB,PacientesGAB],
    migrations: [],
    subscribers: [],
})
