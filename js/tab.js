  $(document).ready(function () {
      // 탭 클릭 이벤트
      $('.tab').click(function (event) {
          event.preventDefault(); // 링크 클릭 시 기본 동작 방지

          // 모든 탭과 탭 콘텐츠에서 'active' 클래스 제거
          $('.tab').removeClass('active');
          $('.tab-pane').removeClass('active');

          // 클릭된 탭에 'active' 클래스 추가
          $(this).addClass('active');
          var tabId = $(this).data('tab');

          // 해당 탭 콘텐츠에 'active' 클래스 추가
          $('#' + tabId).addClass('active');

          // 쿼리 파라미터를 URL에 추가
          var url = new URL(window.location);
          url.searchParams.set('tab', tabId);
          history.replaceState(null, null, url);
      });

      // 페이지 로드 시 쿼리 파라미터에 맞는 탭을 활성화
      var urlParams = new URLSearchParams(window.location.search);
      var tabId = urlParams.get('tab');
      if (tabId) {
          $('.tab[data-tab="' + tabId + '"]').click();
      } else {
          // 기본 탭 활성화 (첫 번째 탭 등)
          $('.tab').first().click();
      }

      // 페이지 로드 후 쿼리 파라미터 제거
      if (window.location.search) {
          var url = new URL(window.location);
          url.search = ''; // 쿼리 파라미터 제거
          history.replaceState(null, null, url);
      }
  });
