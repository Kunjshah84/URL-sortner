import { nanoid } from "nanoid";
import url from "../models/user.js";

async function handlegenerateurlshortnerurl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ status: "Bhia url to nakh" });
    const obj = await url.findOne({ redirectul: body.url });
    const allurls = await url.find({})
    if (obj) return res.render('home', {
        sortid: obj.sortid,
        status: 'same url',
        urls: allurls
    })
    const newid = nanoid(8);
    const newcreated = await url.create({
        sortid: newid,
        redirectul: body.url,
        //     visithistory: []
        // });
        // // console.log(newcreated);
        // // return res.status(200).json({ id: newid });
        // //If we want that each and every time i got the table:
        // return res.render('home' ,{
        //     id:newid,
        //     urls: allurls
        // } )
    }

async function gettherealurl(req, res) {
            const furl = req.params.id
            const changed = await url.findOneAndUpdate({
                sortid: furl
            },
                { $push: { visithistory: { timestamps: new Date() } } },
                { new: true })
            // console.log(changed + "and the furl is" + furl);
            res.status(200).redirect(changed.redirectul)
        }

async function handletheanalysis(req, res) {
            const jenamatejovuchee = req.params.shortedurl
            const finded = await url.findOne({
                sortid: jenamatejovuchee
            })
            res.status(200).json({ totalclicksontheurl: `${finded.visithistory.length}` })
        }

export { handlegenerateurlshortnerurl, gettherealurl, handletheanalysis }; // Export using ES Module syntax
