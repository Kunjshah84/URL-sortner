import express from "express";
const router = express.Router();

import { handlegenerateurlshortnerurl, gettherealurl, handletheanalysis} from "../controllers/url.js"; // Corrected path and import

router.post('/', handlegenerateurlshortnerurl);
router.get('/:id', gettherealurl)
router.get('/analytics/:shortedurl', handletheanalysis)
export default router; // Export using ES Module syntax
