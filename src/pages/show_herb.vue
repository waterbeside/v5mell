<template>
  <div class="g-mainer p-show-herb">

    <div  class="g-head-banner " >
     <div class="container-fluid d-flex ">
       <h1>紫蘇葉</h1>
       <div class="me-tag-wrap">
         <div class="me-tag me-tag-hc-12">温</div>
         <div class="me-tag">辛</div>
       </div>
     </div>
    </div>


      <div class="me-herb-names">
        <dl>
          <dt>拉丁名</dt>
          <dd>1.Perilla frutescens(L.)Britt. Var .crispa (Thumb.) Hand.-Mand .-Mazz.2.Perilla frutescens (L.) Britt.var.acuta (Thunb.) Kudo</dd>
        </dl>
        <dl>
          <dt>别 名</dt>
          <dd>苏叶</dd>
        </dl>
        <dl>
          <dt>英文名</dt>
          <dd>Perilla Seed, Perilla Leaf</dd>
        </dl>
      </div>

      <section class="me-st-box me-herb-baseinfo">
        <div class="heading heading-gray h7">特性</div>
        <div class="body">
          <div class="col-6 info-item">
            <label>性</label>
            <h5>温</h5>
          </div>
          <div class="col-6 info-item">
            <label>味</label>
            <h5>辛</h5>
          </div>
          <div class="col-6 info-item">
            <label>毒</label>
            <h5>无毒</h5>
          </div>
          <div class="col-6 info-item">
            <label>归经</label>
            <h5>入肺、脾经</h5>
          </div>
        </div>
      </section>
      <section class="me-st-box me-herb-comefrom">
        <div class="heading heading-gray h7">基源</div>
        <div class="body">
          <div class="info-item">
            <label>科别</label>
            <h5>唇形科</h5>
          </div>
          <div class="info-item ">
              本品为唇形科植物紫苏Perilla frutescens （L.）Britt的干燥叶（或带嫩枝）。夏季枝叶茂盛时采收，除去杂质，晒干。
          </div>
        </div>
      </section>
      <div class="me-st-box me-herb-comefrom">
        <div class="heading heading-gray h7">详细</div>
        <article class="me-herb-article">
        《中国药典》:紫苏叶
【拼音名】Zǐ Sū Yè
【英文名】FOLIUM PERILLAE
【别名】苏叶
【来源】本品为唇形科植物紫苏Perilla frutescens （L.）Britt的干燥叶（或带嫩枝）。夏季枝叶茂盛时采收，除去杂质，晒干。
【性状】本品叶片多皱缩卷曲、碎破，完整者展平后呈卵圆形，长4～11cm，宽2.5～9cm。先端长尖或急尖，基部圆形或宽楔形，边缘具圆锯齿。两面紫色或上表面绿色，下表面紫色，疏生灰白色毛，下表面有多数凹点状的腺鳞。叶柄长2～7cm，紫色或紫绿色。质脆。带嫩枝者，枝的直径2～5mm，紫绿色，断面中部有髓。气清香，味微辛。
【鉴别】（1）本品叶的表面制片：表皮细胞中某些细胞内含有紫色素，滴加10％盐酸溶液，立即显红色；或滴加 5％氢氧化钾溶液，即显鲜绿色，后变为黄绿色。
（2）取本品粗粉0.7g，置500ml 圆底烧瓶中，加水250ml ，混匀，连接挥发油测定器，自测定器上端加水至刻度，并溢流入烧瓶中为止，再加石油醚（60 ～90℃）1.5ml，连接回流冷凝管，加热至沸，并保持微沸2 小时，放冷，分取石油醚层作为供试品溶液。另取紫苏叶对照药材0.7g，同法制成对照药材溶液。照薄层色谱法（附录Ⅵ B）试验，吸取上述两种溶液各10μl ，分别点于同一硅胶Ｇ薄层板上，以石油醚（60～90℃）－醋酸乙酯（19:1）为展开剂，展开，展距15cm，取出,晾干，喷以二硝基苯肼试液，放置。供试品色谱中，与对照药材色谱相应的位置上，显相同颜色的斑点。
【炮制】除去杂质及老梗；或喷淋清水、切碎，干燥。
【性味】辛，温。
【归经】归肺、脾经。
【功能主治】解表散寒，行气和胃。用于风寒感冒，咳嗽呕恶，妊娠呕吐，鱼蟹中毒。
【用法用量】5～9g。
【贮藏】置阴凉干燥处。
【备注】（1）紫苏叶能散表寒，发汗力较强，用于风寒表症，见恶寒、发热、无汗等症，常配生姜同用；如表症兼有气滞，有可与香附、陈皮等同用。紫苏叶用于脾胃气滞、胸闷、呕恶，不论有无表症，均可应用，都是取其行气宽中的作用，临床常与藿香配伍应用。此外，本品有能行气安胎，常配砂仁、陈皮同用，治疗妊娠恶阻、胎动不安。紫苏辛温，能解鱼蟹毒，中鱼蟹毒后可用单味紫苏煎服，或配合生姜同用。
【摘录】《中国药典》
        </article>
      </div>


  </div>

</template>

<script>
export default {
  name: 'ShowHerb',
  data () {
    return {

    }
  },
  methods: {
    getParam () {
      console.log(this.$route.params);
    }
  }
}
</script>
