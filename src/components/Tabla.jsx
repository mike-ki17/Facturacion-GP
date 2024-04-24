import React, { useContext, useState } from "react";
import "../data/egg";
import { eggInfo } from "../data/egg";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "./PDF";

function Tabla(props) {
  // const [store, setStore] = useContext(StoreContext)

  const resultados = eggInfo.map((element, index) => {
    return element.amount * props.torres[index] * element.valueUnit;
  });

  // console.log(store)
  const total = resultados.reduce((total, valor) => total + valor, 0);

  return (
    <>
      <p id="total" className="total">
        Total:{" "}
        {"$" + total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
      </p>
      <div className="container-table">
        <table id="costosView">
          <thead>
            <tr className="cells">
              <th>Torres</th>
              <th>Tipo</th>
              <th>Valor unitario</th>
              <th>Cantidad</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {eggInfo.map((i, index) => {
              return (
                <tr key={index}>
                  <td>
                    {props.torres[index] < 0
                      ? "No se reciben números negativos"
                      : props.torres[index]}
                  </td>
                  <td>{eggInfo[index].tipoEgg}</td>
                  <td>COP ${eggInfo[index].valueUnit}</td>
                  <td>{props.torres[index] * eggInfo[index].amount}</td>
                  <td>
                    {"COP $" +
                      (
                        props.torres[index] *
                        eggInfo[index].amount *
                        eggInfo[index].valueUnit
                      )
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <button className="download" id="save">Descargar Factura</button> */}
      <div className="container-dowload-pdf">
        <PDFDownloadLink
          className="btn-dowload"
          document={
            <PDF
              nombre={props.name}
              cedula={props.cedula}
              direccion={props.direccion}
              telefono={props.telefono}
              torres={props.torres}
            />
          }
          fileName="myfirstpdf.pdf"
        >
          {({ loading, url, error, blob }) =>
            loading ? (
              <button>Loading Document ...</button>
            ) : (
              <button>Descargar ahora !</button>
            )
          }
        </PDFDownloadLink>
      </div>
    </>
  );
}

export default Tabla;
