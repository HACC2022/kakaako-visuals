//const link = 'https://opendata.hawaii.gov/api/3/action/package_list';
const link = 'https://opendata.hawaii.gov/api/3/action/group_list';

const getData = async (url) => {
  const res = await fetch(link);
  const jsonData = await res.json();
  // console.log(jsonData);
};

export const allLists = getData(link);

export default function handler(req, res) {
  res.status(200).json(allLists);
}
