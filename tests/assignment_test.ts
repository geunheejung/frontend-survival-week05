Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');
  I.see('식당 이름');
  I.see('종류');
  I.see('메뉴');

  I.click('한식');
  I.see('메리김밥');
  I.see('김밥');

  I.click('전체');
  I.fillField('검색', '메가반점');
  I.dontSee('메리김밥');
  I.dontSee('김밥');

  I.fillField('검색', '메');
  I.click('한식');
  I.see('메리김밥');
  I.dontSee('메가반점');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');

  I.click({ name: '#탕수육선택' });
  I.click({ name: '#제육김밥선택' });

  I.click({ name: '#탕수육취소' });
  I.click({ name: '#훈제오리김밥선택' });

  I.click('합계: 10,500원 주문');

  I.waitForText('주문번호');
  I.see('총 가격: 10,500원');

  I.wait(7);

  I.see('영수증 나오는 곳');
});
