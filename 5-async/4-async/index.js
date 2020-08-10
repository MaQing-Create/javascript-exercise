async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const fetchRes = await fetch(url);
  if (fetchRes.status === 200) {
    const json = await fetchRes.json();
    document.writeln(json.name);
  } else console.error('Error');
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
