window.onload = function() {
    const lookup = document.getElementById("lookup");
    const lookupcities = document.getElementById("cities");

    const makeRequest = (context) => {
        return (e) => {
            e.preventDefault();
            const qry = document.getElementById("country").value;
            const rqst = new XMLHttpRequest();
            const url = `http://localhost/info2180-lab5/world.php?country=${qry}&context=${context}`;

            rqst.onreadystatechange = function() {
                if (rqst.readyState == XMLHttpRequest.DONE) {
                    if (rqst.status == 200) {
                        document.getElementById("result").innerHTML = rqst.responseText;
                    } else {
                        alert("Something went wrong");
                    }
                }
            };

            rqst.open("GET", url, true);
            rqst.send();
        };
    };

    lookup.addEventListener("click", makeRequest(""));
    lookupcities.addEventListener("click", makeRequest("cities"));
};