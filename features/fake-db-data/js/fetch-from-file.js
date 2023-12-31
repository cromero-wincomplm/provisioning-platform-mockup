const userInfo = document.getElementById("userInfo");
const FAKE_DB_LOCATION = "../../fake-db-data/db.json";
async function fetchData() {
  try {
    const response = await fetch(FAKE_DB_LOCATION); // Replace '../db.json' with your JSON file path
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const jsonFileRootObject = await response.json();
   // console.log(jsonFileRootObject);
    return jsonFileRootObject.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
async function main() {
  try {
    const jsonData = await fetchData();
    let fakeUser1 = jsonData.provisioning_platform_data.users[0]
    userInfo.innerText = `${fakeUser1.name}, ${fakeUser1.lastname}`;
  } catch (error) {
    console.error('Error:', error);
  }
}

main();