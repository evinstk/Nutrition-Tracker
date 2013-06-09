/* Sets browser cookie in browser cookie string */
function setCookie(c_name, c_value) {
    var value = escape(c_value);
    document.cookie = c_name + "=" + value + "; ";
}

/* Returns cookie when given cookie name */
function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_start = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
    }
    if (c_end == -1) {
        c_end = c_value.length;
    }
    c_value = unescape(c_value.substring(c_start, c_end));
    return c_value;
}

/**
 * User class constructor
 * Gets username and password from cookie
 */
function User() {
    this.username = getCookie("nutritionUsername");
    this.password = getCookie("nutritionPassword");
    this.setInfo();
}

/**
 * User class constructor
 * Given username and password as parameters
 */
function User(username, password) {
    this.setAll(username, password);
}

/* Sets all properties of User object */
User.prototype.setAll(username, password) {
    this.username = username;
    this.password = password;
    this.setInfo();
    setCookie("nutritionUsername", username);
    setCookie("nutritionPassword", password);
}

/* Sets info from PHP script */
User.prototype.setInfo = function {
    if (this.username && this.password) {
        $.ajax({
            url: "/user.php",
            type: "post",
            data: {
                username: this.username,
                password: this.password
            },
            dataType: "json",
            async: false,
            success: function(data) {
                this.info = data;
            }
        });
    }
    else {
        return null;
    }
}

