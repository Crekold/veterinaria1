import db from "../config/database.js";

// Get All Discounts
export const getDescuentos = (result) => {
    db.query("SELECT * FROM descuentos", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Discount
export const getDescuentoById = (id, result) => {
    db.query("SELECT * FROM descuentos WHERE id_descuento = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Discount to Database
export const insertDescuento = (data, result) => {
    db.query("INSERT INTO descuentos (nombre, porcentaje, fecha_inicio, fecha_fin, productos_id_producto) VALUES (?, ?, ?, ?, ?)", 
    [data.nombre, data.porcentaje, data.fecha_inicio, data.fecha_fin, data.productos_id_producto], 
    (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Discount in Database
export const updateDescuentoById = (data, id, result) => {
    db.query("UPDATE descuentos SET nombre = ?, porcentaje = ?, fecha_inicio = ?, fecha_fin = ?, productos_id_producto = ? WHERE id_descuento = ?", 
    [data.nombre, data.porcentaje, data.fecha_inicio, data.fecha_fin, data.productos_id_producto, id], 
    (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Discount from Database
export const deleteDescuentoById = (id, result) => {
    db.query("DELETE FROM descuentos WHERE id_descuento = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
