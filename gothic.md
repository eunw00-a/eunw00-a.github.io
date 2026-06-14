---
layout: page
title: [숙제13] 텍스트 분석 도구 구현
permalink: /gothic/
---

# [숙제13] 텍스트 분석 도구 구현

<!-- Q1: 두 고딕 소설의 상위 30개 단어 비교 -->
<h2>Frankenstein vs. Dracula -- 상위 30개 단어</h2>
<div style="display: flex; gap: 1em;">
    <div style="flex: 1;">
        <h3>Frankenstein (Shelley, 1818)</h3>
        <div style="height: 600px;">
            <canvas id="chart-frankenstein"></canvas>
        </div>
    </div>
    <div style="flex: 1;">
        <h3>Dracula (Stoker, 1897)</h3>
        <div style="height: 600px;">
            <canvas id="chart-dracula"></canvas>
        </div>
    </div>
</div>

<!-- Q2: 보고서 (아래에 작성) -->

## 보고서

### 추가한 불용어와 근거

NLTK 기본 목록 외에 다음 7개의 단어를 `data/stopwords-custom.txt`에
추가했다: `one`, `could`, `would`, `shall`, `said`, `may`, `even`

이 단어들은 두 작품의 상위 30개에 **모두** 들어 있었으나,
특정한 의미를 지니기보다도 **소설 장르**에서 흔하게 나타나는 단어라고 판단해 제외했다.
`could`, `would`, `shall`,`may`, `even` 의 경우 내용과 관련 없는 문법적 단어(조동사, 부사)라 보았고,
`one`, `said`의 경우 서사 진행을 위해 흔하게 사용되는 단어로 판단했다.

### 두 작품의 단어 빈도가 들려주는 이야기

- **공통으로 도드라지는 단어**: `night`, `man`이 두 작품 모두 높은 빈도로 나타난다. `night`는 두 작품이 공통적으로 **어둠과 공포**를 주된 분위기로 삼는 고딕 소설임을 보여주고, `man`은 두 작품의 주제가 **인간 존재**와 관련되어 있음을 보여준다.
- **한 작품에만 도드라지는 단어**와 그것이 시사하는 작품의 특성: *Frankenstein*에서는 `father`이 도드라지는데, 이는 자신을 창조한 빅터 박사를 아버지로 여기는 괴물과 박사 간의 **인물 관계**가 작품의 중심 축이 됨을 시사한다. 이외에도 `life`, `death`를 통해 **생명 창조와 죽음의 경계**가 작품의 핵심 주제가 됨을 유추할 수 있다. 한편 *Dracula*에서는 `van`,`helsing`, `lucy`, `mina`와 같은 고유명사가 도드라지는데, 이는 여러 인물의 일기와 편지로 구성되어 등장인물이 자주 호명되는 **서간체** 작품의 특성을 보여준다. 또한 `room`은 햇빛을 피해 실내에 머물 수밖에 없는 드라큘라의 **공간적 특성**을 반영한다. 

{% include chartjs.html %}
<script src="/assets/js/analysis.js"></script>
<script src="/assets/js/gothic.js"></script> 