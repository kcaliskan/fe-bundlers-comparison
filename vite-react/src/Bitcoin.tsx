
import { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface CurrenctyTableColumn {
  "id": string,
  "rank": string,
  "symbol": string,
  "name": string,
  "supply": string,
  "maxSupply": string,
  "marketCapUsd": string,
  "volumeUsd24Hr": string,
  "priceUsd": string,
  "changePercent24Hr": string,
  "vwap24Hr": string
}

const fetchAssets = async () => {
  const response = await fetch('https://api.coincap.io/v2/assets/bitcoin')
  const data = await response.json();
  console.log(data, 'data')
  return data;
}

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState<CurrenctyTableColumn[]>([]);

  useEffect(() => {
    fetchAssets().then((data) => {
      setRowData(data.data);
      setLoading(false);
    })
  }, []);
  // const [columnDefs] = useState([
  //   { field: 'make' },
  //   { field: 'model' },
  //   { field: 'price' },
  //   { field: 'year' },
  //   { field: 'milage' },
  //   { field: 'transmission' },
  //   { field: 'engine' },
  //   { field: 'sunroof' },
  //   { field: 'bodyType' },
  //   { field: 'payment' },
  //   { field: 'fuel' },
  //   { field: 'color' },
  //   { field: 'interiorColor' },
  //   { field: 'cylinders' },
  //   { field: 'tranmissions' },
  //   { field: 'driveType' },
  // ])


  const [columnDefs] = useState([
    {
      title: "Id",
      field: "id"
    },
    {
      title: "Rank",
      field: "rank"
    },
    {
      title: "Symbol",
      field: "symbol"
    },
    {
      title: "Name",
      field: "name"
    },
    {
      title: "Supply",
      field: "supply"
    },
    {
      title: "Max Supply",
      field: "maxSupply"
    },
    {
      title: "Market Cap Usd",
      field: "marketCapUsd"
    },
    {
      title: "Volume USD 24Hr",
      field: "volumeUsd24Hr"
    },
    {
      title: "Price USD",
      field: "priceUsd"
    },
    {
      title: "Change Percent 24Hr",
      field: "changePercent24Hr"
    },
    {
      title: "vwap24Hr",
      field: "vwap24Hr"
    }
  ])

  return (
    <div>
      {loading ? <div>Loading...</div> :
        <div className="ag-theme-alpine" style={{ height: 2400, width: 1600 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}>
          </AgGridReact>
        </div>
      }
    </div>
  )
}
