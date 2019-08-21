import { tokamak, ProtonPlasma } from "@fusion.io/proton";
import HttpPlasma from "./http/Plasma";
import { Plasma as DatabasePlasma } from "@fusion.io/integrations-knex";


export default tokamak
    .configure(require("../config"))
    .fuse(ProtonPlasma)
    .fuse(DatabasePlasma)
    .fuse(HttpPlasma)
;
