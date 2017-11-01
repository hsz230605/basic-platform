<template>
<div>
  <div class="header_">
    <header-menu></header-menu>
  </div>
    <main class="mdl-layout__content" style="width: 100%;height: 100%;">
    <div class="page-content" style="width: 100%!important;height: 100% !important;"><!-- Your content goes here -->
        <div class="showtop">
            <div class="showtopTitle">
              <h4>这里是题目</h4>
              <h6>一些说明一些说明一些说明一些说明一些说明一些说明一些说明一些说明一些说明一些说明</h6>
            </div>
            <div clh6ass="showtopBtn">
              <button class="showtopBtnWidth mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                去瞅瞅
              </button>
             <!-- Simple Select -->
            <!-- Simple Select -->
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth" style="width: 30%;">

                  <input class="showtopSelect mdl-textfield__input" type="text" id="sample1" value="Belarus" readonly tabIndex="-1" >

                  <ul for="sample1" class="mdl-menu mdl-menu--bottom-left mdl-js-menu" style="width: 100%;text-align: center;">
                      <li class="mdl-menu__item" style="width: 100%;">Germany</li>
                      <li class="mdl-menu__item">Belarus</li>
                      <li class="mdl-menu__item">Russia</li>
                  </ul>
              </div>
            
            </div>
        </div>
        <div class="showmore">
          
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col"><h4>更多项目</h4></div>
            <div class="mdl-cell mdl-cell--6-col">
              <div class="demo-card-square mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title mdl-card--expand">
                  <h2 class="mdl-card__title-text">一个城市</h2>
                </div>
                <div class="mdl-card__supporting-text">
                  这是一个美味的城市，非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常美味！
                </div>
                <div class="mdl-card__actions mdl-card--border">
                  <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    去看看
                  </a>
                </div>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
              <div class="demo-card-square mdl-card mdl-shadow--2dp">
                  <div class="mdl-card__title mdl-card--expand">
                    <h2 class="mdl-card__title-text">一个城市</h2>
                  </div>
                  <div class="mdl-card__supporting-text">
                    这是一个美味的城市，非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常美味！
                  </div>
                  <div class="mdl-card__actions mdl-card--border">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                      去看看
                    </a>
                  </div>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
              <div class="demo-card-square mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title mdl-card--expand">
                  <h2 class="mdl-card__title-text">一个城市</h2>
                </div>
                <div class="mdl-card__supporting-text">
                  这是一个美味的城市，非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常美味！
                </div>
                <div class="mdl-card__actions mdl-card--border">
                  <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    去看看
                  </a>
                </div>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
              <div class="demo-card-square mdl-card mdl-shadow--2dp">
                  <div class="mdl-card__title mdl-card--expand">
                    <h2 class="mdl-card__title-text">一个城市</h2>
                  </div>
                  <div class="mdl-card__supporting-text">
                    这是一个美味的城市，非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常美味！
                  </div>
                  <div class="mdl-card__actions mdl-card--border">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                      去看看
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  </main>
  </div>
</div>
</template>

<script scoped>
import headerMenu from "@/components/HeaderMenu";

export default {
  components: {
    headerMenu
  }
};
</script>
<style scoped>
.showtop {
  height: 200px;
  width: 100%;
  background: url("../assets/boston.jpg");
  background-size:100% ;
  padding:100px;
}
.showtopTitle{
  width:30%;
  color: white;
}

.showtopTitle h4{
margin: 70px 0 30px 0;
}
.showtopBtn{
  width:1000px;
}
.showtopBtnWidth{
  width:260px;
}
.showtopSelect{
  height: 27px;
  background:rgba(255,255,255,0.5);
}
.showmore{
  padding:0px 30px;
}
.mdlSelectOption{
  width: 100%;
}
.demo-card-square.mdl-card {
  width: 100%;
  height: 320px;
}
.demo-card-square > .mdl-card__title {
  color: #fff;
  background:
    url('../assets/city.jpg')  #46B6AC;
}
.mdl-menu__container,.is-upgraded,.is-visible{
    width: 100%;
}

</style>
