const Extra = require('../models/Extra')

module.exports = {
    // get all extras
    index: async (req, res) => {
        try {
            const extras = await Extra.find()
            if(extras.length > 0){
                res.status(200).json({
                    status: true,
                    data: extras,
                    method: req.method,
                    url: req.url
                })
            } else{
                res.json({
                    status: false,
                    message: "Wah! Data masih kosong!"
                })
            }
        } catch (error) {
            res.status(400).json({success: false})
        }
        
      },
      // get an extras
      show: async (req, res) => {
        try {
            const extra = await Extra.findById(req.params.id)
            res.json({
                status: true,
                data: extra,
                method: req.method,
                url: req.url,
                message: "Yeay! Data berhasil didapatkan!"
            })

        } catch (error) {
            res.status(400).json({success: false})
        }
    },

      store: async (req, res) => {
        try {
            const extra = await Extra.create(req.body)
            res.status(200).json({
                status: true,
                data: extra,
                method: req.method,
                url: req.url,
                message: "Yeay! Data berhasil ditambahkan!"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
        
      },
      update: async (req, res) => {
        try {
            const extra = await Extra.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: extra,
                method: req.method,
                url: req.url,
                message: "Yeay! Data berhasil diubah!"
            })

        } catch (error) {
            res.status(400).json({success: false})
        }
        
      },
      delete: async(req, res) => {
        try {
            await Extra.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Yeay! Data berhasil dihapus!"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
      }
}