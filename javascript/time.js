function runtime() {
    X = new Date("05/19/2020 00:00:00");
    Y = new Date();
    T = (Y.getTime() - X.getTime());
    M = 24 * 60 * 60 * 1000;
    a = T / M;
    A = Math.floor(a);
    b = (a - A) * 24;
    B = Math.floor(b);
    c = (b - B) * 60;
    C = Math.floor((b - B) * 60);
    D = Math.floor((c - C) * 60);
    span.innerHTML = "本站已苟活: " + A + "天" + B + "小时" + C + "分" + D + "秒"
}
setInterval(runtime, 1000);