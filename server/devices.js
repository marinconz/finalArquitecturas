import  express  from "express";

import { getDevices, createDevices, deleteDevice } from "./controllers/devices.js";

const router = express.Router();

router.get('/', getDevices);
router.post('/', createDevices);
router.delete('/:id', deleteDevice)

export default router;