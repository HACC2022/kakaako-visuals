import {useEffect, useState} from 'react';
import Link from 'next/link';
import Pagination from './Pagination';
import Loading from './Loading';
import Image from 'next/image';
import DatasetLayout from './datasetInfoLayout/DatasetLayout';

const formatObj = {
  CSV: 'https://icons.iconarchive.com/icons/icons8/ios7/256/Files-Csv-icon.png',
  RDF: 'https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Mimetypes-text-rdf-icon.png',
  JSON: 'https://icons.iconarchive.com/icons/papirus-team/papirus-mimetypes/256/app-json-icon.png',
  XML: 'https://icons.iconarchive.com/icons/icons8/ios7/256/Programming-Xml-icon.png',
  ZIP: 'https://icons.iconarchive.com/icons/pelfusion/flat-file-type/256/zip-icon.png',
  'ArcGIS GeoServices REST API':
    'https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png',
  GeoJSON:
    'https://icons.iconarchive.com/icons/vectorizeimages/iconpack/512/map-icon.png',
  HTML: 'https://icons.iconarchive.com/icons/graphics-vibe/developer/256/html-5-icon.png',
  KML: 'https://icons.iconarchive.com/icons/icons8/windows-8/512/Files-Kml-icon.png',
};

export default function DatasetMain({datasets, setDatasets}) {
  // Where the pagination will start and stop. Adjusts based on clicking on pagination buttons in Pagination component.
  const [startPagination, setStartPagination] = useState(0);
  const [endPagination, setEndPagination] = useState(30);

  return (
    <div className=" sm:px-3 lg:px-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {datasets
          .map(({title, name, resources}) => (
            <div
              key={name}
              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="flex-shrink-1">
                <Image
                  src="/../public/seal.png"
                  width={80}
                  height={80}
                  alt="Hawaii state seal"
                />
              </div>
              <div className="min-w-0 flex-1 flex-wrap">
                <Link href={`/datasets/${name}`}>
                  <a className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                  </a>
                </Link>
                <div className="flex">
                  {resources.map(({format}) => {
                    return (
                      <>
                        <img className="h-4 w-4 m-2 " src={formatObj[format]} />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          ))
          .slice(startPagination, endPagination)}
      </div>

      <Pagination
        startPagination={startPagination}
        endPagination={endPagination}
        setStartPagination={setStartPagination}
        setEndPagination={setEndPagination}
        datasets={datasets}
      />
    </div>
  );
}
