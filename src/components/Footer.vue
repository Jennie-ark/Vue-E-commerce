<template>
  <footer class="footer_distributed">
    <div class="footer_right">
      <a class="link_1" href.prevent="#"
        ><b-icon icon="facebook" aria-hidden="true"></b-icon
      ></a>
      <a class="link_1" href.prevent="#"
        ><b-icon icon="instagram" aria-hidden="true"></b-icon
      ></a>
      <a class="link_1" href.prevent="#"
        ><b-icon icon="twitter" aria-hidden="true"></b-icon
      ></a>
    </div>

    <div class="footer_left">
      <p class="footer_links">
        <a class="link_1" href.pevent="#">Home</a>
        <a href.prevent="#">Blog</a>
        <a href.prevent="#">About</a>
        <a href.prevent="#">Faq</a>
        <a href.prevent="#">Contact</a>
      </p>

      <p>Company Name &copy; 2021</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer_distributed {
  background-color: black;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font-size: 16px;
  padding: 45px 50px;
}

.footer_distributed .footer_left p {
  color: #8f9296;
  font-size: 14px;
  margin: 0;
}
/* Footer links */

.footer_distributed p.footer_links {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0;
  transition: ease 0.25s;
  cursor: pointer;
}

.footer_distributed p.footer_links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease 0.25s;
}

.footer_distributed .footer_links a:before {
  content: "·";
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}
.link_1 {
  cursor: pointer;
}
.footer_distributed .footer_links .link_1:before {
  content: none;
}

.footer_distributed .footer_right {
  float: right;
  margin-top: 6px;
  max-width: 180px;
}

.footer_distributed .footer_right a {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  transition: all 0.25s;
}

.footer_distributed .footer_right a:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.footer_distributed p.footer_links a:hover {
  text-decoration: underline;
}

/* Media Queries */

@media (max-width: 400px) {
  .footer-distributed .footer_left,
  .footer_distributed .footer_right {
    text-align: center;
  }
  .footer_distributed .footer_right {
    float: none;
    margin: 0 auto 20px;
  }
  .footer_distributed .footer_left p.footer_links {
    line-height: 1.8;
  }
}
@media (max-width: 375px) {
  .footer_distributed p.footer_links {
    font-size: 17px;
    text-align: center;
  }
}
</style>
