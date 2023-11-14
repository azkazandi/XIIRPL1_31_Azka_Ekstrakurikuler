const mongoose = require('mongoose')

const ExtraSChema = new mongoose.Schema({
    nama_extra: {
        type: String,
        required: [true, 'Silahkan isikan nama extra'],
        unique: true
    },
    nama_pembimbing: {
        type: String,
        required: [true, 'Silahkan isikan nama pembimbing'],
        unique: true
    },
    nama_siswa: {
        type: String,
        required: [true, 'Silahkan isikan nama siswa'],
        unique: true
    },
    ruangan_extra: {
        type: String,
        required: [true, 'Silahkan isikan nama ruangan extra'],
        unique: true
    },
    jadwal: {
        type: String,
        required: [true, 'Silahkan isikan nama extra'],
        unique: true
    },
    waktu: {
        type: String,
        required: [true, 'Silahkan isikan nama extra'],
        unique: true
    }
})

module.exports = mongoose.model('Extra', ExtraSChema)