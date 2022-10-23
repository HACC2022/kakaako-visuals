import Link from 'next/link';
import Image from 'next/image';
export default function ListItems({datasets, handleSetId}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {datasets.map((data) => (
        <div
          key={data}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={`https://health.hawaii.gov/wp-content/themes/hic_state_template_parent/images/og-image.jpg`}
              alt="hawaii state crest"
            />
          </div>
          <div className="min-w-0 flex-1">
            <Link href={`/datasets/${data}`}>
              <a className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p value={data} className="text-sm font-medium text-gray-900">
                  {data}
                </p>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
