import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    content: "Blog 1 content",
  },
  {
    id: 2,
    title: "Blog 2",
    content: "Blog 2 content",
  },
];

const user = {
  username: "berkerozer",
  password: "1234567",
};

const app = express();

const authMiddleware = (req, res, next) => {
  if (user.username === "berkerozer" && user.password === "1234567") {
    next();
  }

  res.send("Kullanıcı adı veya şifre hatalı");
};

app.use(express.json());
app.use("/admin", authMiddleware);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/blog", (req, res) => {
  res.send(blogs);
});

app.get("/blog/:id/", (req, res) => {
  const id = req.params.id;

  const blog = blogs.find((item) => {
    return item.id == id;
  });

  if (blog) {
    res.send(blog);
  } else {
    res.send("404 sayfa bulunamadı");
  }
});

app.get("/contact", authMiddleware, (req, res) => {
  res.send("iletişim");
});

app.post("/admin/addblog", (req, res) => {
  const blog = req.body;

  blogs.push(blog);

  res.send("Blog eklendi");
});

app.get("/admin", (req, res) => {
  res.send("Admin sayfası");
});

app.use((req, res) => {
  res.send("404 sayfa bulunamadı");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
