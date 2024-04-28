let api ="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
let currentPage = 1
let departmentFilter = ""
let genderFilter = ""
let sortOption = ""

let filterData = async () => {
    // console.log(url)
  let url = api + "?page=" + currentPage + "&limit=10"
  // console.log(url)

  if (departmentFilter) {
    url += "&filterBy=department&filterValue=" + departmentFilter
  } else if (genderFilter) {
    url += "&filterBy=gender&filterValue=" + genderFilter
  }

  if (sortOption) {
    url += "&sort=salary&order=" + sortOption
  }
  // console.log(url)
  fetchData(url)
}

let fetchData = async (url) => {
  // console.log(url)
  let res = await fetch(url)
  let resData = await res.json()
  displayData(resData)
}

function displayData(data) {
    // console.log(data)
    // console.log(data.data)
  const tableBody = document.getElementById("employeeData")
  tableBody.innerHTML = ""
  data.data.forEach((employee, index) => {
    const row = `<tr>
                    <td>${index + 1}</td>
                    <td>${employee.name}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>`
    tableBody.innerHTML += row
  })
}

function updatePagination() {
  document.getElementById("currentPage").textContent = `Page ${currentPage}`
  document.getElementById("prevBtn").disabled = currentPage === 1
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentPage--
  filterData()
  updatePagination()
})

document.getElementById("nextBtn").addEventListener("click", () => {
  currentPage++
  filterData()
  updatePagination()
})

document.getElementById("department").addEventListener("change", (event) => {
  departmentFilter = event.target.value
  currentPage = 1
  filterData()
  updatePagination()
})

document.getElementById("gender").addEventListener("change", (event) => {
  genderFilter = event.target.value

  currentPage = 1
  filterData()
  updatePagination()
})

document.getElementById("sort").addEventListener("change", (event) => {
  sortOption = event.target.value
  currentPage = 1
  filterData()
  updatePagination()
})

filterData()
updatePagination()
