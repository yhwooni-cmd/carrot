// 중고 거래 플랫폼 서비스 - 공통 JavaScript

// 전역 상태 관리
const AppState = {
  currentUser: {
    id: 'user001',
    name: '김안전',
    email: 'safe@example.com',
    phone: '010-1234-5678',
    safetyScore: 85,
    safetyLevel: 'good',
    badges: ['phone-verified', 'email-verified', 'id-verified'],
    isLoggedIn: true
  },

  // 예제 데이터
  sampleData: {
    products: [
      {
        id: 'prod001',
        title: '아이폰 14 Pro 256GB',
        price: 950000,
        seller: {
          id: 'seller001',
          name: '박신뢰',
          safetyScore: 92,
          safetyLevel: 'excellent',
          badges: ['phone-verified', 'email-verified', 'id-verified', 'transaction-10']
        },
        images: ['https://via.placeholder.com/300x300?text=iPhone+14+Pro'],
        category: '전자기기',
        location: '서울시 강남구',
        createdAt: '2024-09-20',
        viewCount: 156,
        likeCount: 23
      },
      {
        id: 'prod002',
        title: '삼성 갤럭시 S24 Ultra',
        price: 1200000,
        seller: {
          id: 'seller002',
          name: '이믿음',
          safetyScore: 78,
          safetyLevel: 'good',
          badges: ['phone-verified', 'email-verified']
        },
        images: ['https://via.placeholder.com/300x300?text=Galaxy+S24'],
        category: '전자기기',
        location: '서울시 서초구',
        createdAt: '2024-09-21',
        viewCount: 89,
        likeCount: 15
      },
      {
        id: 'prod003',
        title: '맥북 프로 16인치 M3',
        price: 2800000,
        seller: {
          id: 'seller003',
          name: '최조심',
          safetyScore: 45,
          safetyLevel: 'warning',
          badges: ['phone-verified']
        },
        images: ['https://via.placeholder.com/300x300?text=MacBook+Pro'],
        category: '전자기기',
        location: '경기도 성남시',
        createdAt: '2024-09-22',
        viewCount: 234,
        likeCount: 42
      }
    ],

    notifications: [
      {
        id: 'noti001',
        type: 'warning',
        title: '의심스러운 거래 감지',
        message: '평소보다 저렴한 가격의 상품에 관심을 표시하셨습니다. 거래 전 판매자 안전도를 확인해보세요.',
        time: '방금 전',
        isRead: false
      },
      {
        id: 'noti002',
        type: 'info',
        title: '새로운 문의가 도착했습니다',
        message: '\'아이폰 14 Pro 256GB\' 상품에 대한 문의가 도착했습니다.',
        time: '10분 전',
        isRead: false
      },
      {
        id: 'noti003',
        type: 'success',
        title: '거래가 완료되었습니다',
        message: '\'무선 이어폰\' 거래가 성공적으로 완료되었습니다. 상대방을 평가해주세요.',
        time: '1시간 전',
        isRead: true
      }
    ],

    chats: [
      {
        id: 'chat001',
        productId: 'prod001',
        partnerId: 'seller001',
        partnerName: '박신뢰',
        partnerSafety: 92,
        lastMessage: '안녕하세요! 직거래 가능할까요?',
        lastTime: '2024-09-23 14:30',
        unreadCount: 2,
        messages: [
          {
            id: 'msg001',
            senderId: 'user001',
            message: '안녕하세요! 아이폰 상태가 어떤가요?',
            time: '2024-09-23 14:25',
            type: 'text'
          },
          {
            id: 'msg002',
            senderId: 'seller001',
            message: '안녕하세요! 거의 새것이에요. 박스, 충전기 모두 있습니다.',
            time: '2024-09-23 14:27',
            type: 'text'
          },
          {
            id: 'msg003',
            senderId: 'user001',
            message: '안녕하세요! 직거래 가능할까요?',
            time: '2024-09-23 14:30',
            type: 'text'
          }
        ]
      }
    ]
  }
};

// 유틸리티 함수들
const Utils = {
  // 안전도 레벨 계산
  getSafetyLevel(score) {
    if (score >= 90) return 'excellent';
    if (score >= 70) return 'good';
    if (score >= 50) return 'normal';
    if (score >= 30) return 'warning';
    return 'danger';
  },

  // 안전도 색상 반환
  getSafetyColor(level) {
    const colors = {
      excellent: '#00C851',
      good: '#4CAF50',
      normal: '#FF9800',
      warning: '#F44336',
      danger: '#212121',
      new: '#9E9E9E'
    };
    return colors[level] || colors.new;
  },

  // 안전도 배경색 반환
  getSafetyBgColor(level) {
    const colors = {
      excellent: '#E8F5E8',
      good: '#F1F8E9',
      normal: '#FFF8E1',
      warning: '#FFEBEE',
      danger: '#FAFAFA',
      new: '#F5F5F5'
    };
    return colors[level] || colors.new;
  },

  // 안전도 텍스트 반환
  getSafetyText(level) {
    const texts = {
      excellent: '최우수',
      good: '우수',
      normal: '보통',
      warning: '주의',
      danger: '위험',
      new: '신규'
    };
    return texts[level] || texts.new;
  },

  // 별점 생성
  generateStars(score) {
    const stars = Math.floor(score / 20); // 100점 만점을 5점 만점으로 변환
    let html = '';
    for (let i = 0; i < 5; i++) {
      html += `<span class="safety-score__star ${i < stars ? '' : 'empty'}">★</span>`;
    }
    return html;
  },

  // 가격 포맷팅
  formatPrice(price) {
    return new Intl.NumberFormat('ko-KR').format(price) + '원';
  },

  // 시간 포맷팅
  formatTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days < 7) return `${days}일 전`;

    return date.toLocaleDateString('ko-KR');
  },

  // 배지 HTML 생성
  generateBadges(badges) {
    const badgeTexts = {
      'phone-verified': '휴대폰 인증',
      'email-verified': '이메일 인증',
      'id-verified': '신분증 인증',
      'address-verified': '주소 인증',
      'transaction-10': '거래 10회+',
      'transaction-50': '거래 50회+',
      'transaction-100': '거래 100회+'
    };

    return badges.map(badge =>
      `<span class="safety-badge safety-badge--${badge.split('-')[0]}">${badgeTexts[badge] || badge}</span>`
    ).join('');
  },

  // 안전도 컴포넌트 생성
  createSafetyScore(score, showBadges = true, badges = []) {
    const level = this.getSafetyLevel(score);
    const color = this.getSafetyColor(level);
    const bgColor = this.getSafetyBgColor(level);
    const text = this.getSafetyText(level);
    const stars = this.generateStars(score);

    return `
      <div class="safety-score" style="--safety-color: ${color}; --safety-bg: ${bgColor};">
        <div class="safety-score__value">${score}</div>
        <div>
          <div class="safety-score__stars">${stars}</div>
          <div class="safety-score__label">${text} 등급</div>
        </div>
        ${showBadges && badges.length > 0 ? `
          <div class="safety-badges">
            ${this.generateBadges(badges)}
          </div>
        ` : ''}
      </div>
    `;
  }
};

// 네비게이션 관리
const Navigation = {
  currentPage: 'dashboard',

  // 페이지 이동
  navigateTo(pageId) {
    this.currentPage = pageId;
    this.updateActiveNav();
    this.showPage(pageId);
  },

  // 활성 네비게이션 업데이트
  updateActiveNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.nav-link[data-page="${this.currentPage}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  },

  // 페이지 표시
  showPage(pageId) {
    // 실제 구현에서는 라우팅 로직이 들어갈 곳
    console.log(`Navigating to: ${pageId}`);
  }
};

// 폼 검증
const FormValidator = {
  // 이메일 검증
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  // 비밀번호 검증
  validatePassword(password) {
    return password.length >= 8 &&
           /[A-Za-z]/.test(password) &&
           /[0-9]/.test(password);
  },

  // 휴대폰 번호 검증
  validatePhone(phone) {
    const re = /^010-?\d{4}-?\d{4}$/;
    return re.test(phone);
  },

  // 폼 필드에 에러 표시
  showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.parentNode.querySelector('.form-error');

    field.classList.add('form-input--error');
    if (errorElement) {
      errorElement.textContent = message;
    }
  },

  // 폼 필드 에러 제거
  clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = field.parentNode.querySelector('.form-error');

    field.classList.remove('form-input--error');
    if (errorElement) {
      errorElement.textContent = '';
    }
  }
};

// 알림 시스템
const NotificationSystem = {
  // 알림 표시
  show(type, title, message, duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `alert alert--${type}`;
    notification.innerHTML = `
      <div class="alert__icon">
        ${type === 'warning' ? '⚠️' : type === 'danger' ? '🚨' : type === 'success' ? '✅' : 'ℹ️'}
      </div>
      <div class="alert__content">
        <div class="alert__title">${title}</div>
        <div class="alert__message">${message}</div>
      </div>
    `;

    // 기존 알림이 있다면 제거
    const existingNotification = document.querySelector('.notification-container .alert');
    if (existingNotification) {
      existingNotification.remove();
    }

    // 알림 컨테이너에 추가
    const container = document.querySelector('.notification-container') || this.createNotificationContainer();
    container.appendChild(notification);

    // 자동 제거
    if (duration > 0) {
      setTimeout(() => {
        notification.remove();
      }, duration);
    }

    return notification;
  },

  // 알림 컨테이너 생성
  createNotificationContainer() {
    const container = document.createElement('div');
    container.className = 'notification-container';
    container.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      max-width: 400px;
    `;
    document.body.appendChild(container);
    return container;
  }
};

// 로딩 상태 관리
const LoadingManager = {
  // 로딩 시작
  start(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element) {
      element.classList.add('loading');
    }
  },

  // 로딩 완료
  stop(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element) {
      element.classList.remove('loading');
    }
  }
};

// 로컬 스토리지 관리
const Storage = {
  // 데이터 저장
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage set error:', e);
    }
  },

  // 데이터 가져오기
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Storage get error:', e);
      return defaultValue;
    }
  },

  // 데이터 삭제
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Storage remove error:', e);
    }
  }
};

// DOM이 로드된 후 초기화
document.addEventListener('DOMContentLoaded', function() {
  // 네비게이션 이벤트 리스너
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageId = this.getAttribute('data-page') || this.getAttribute('href').replace('#', '');
      Navigation.navigateTo(pageId);
    });
  });

  // 폼 검증 이벤트 리스너
  document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('blur', function() {
      const fieldType = this.getAttribute('data-validate');
      if (fieldType) {
        let isValid = true;
        let message = '';

        switch (fieldType) {
          case 'email':
            isValid = FormValidator.validateEmail(this.value);
            message = '올바른 이메일 주소를 입력해주세요.';
            break;
          case 'password':
            isValid = FormValidator.validatePassword(this.value);
            message = '비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다.';
            break;
          case 'phone':
            isValid = FormValidator.validatePhone(this.value);
            message = '올바른 휴대폰 번호를 입력해주세요. (예: 010-1234-5678)';
            break;
        }

        if (!isValid && this.value) {
          FormValidator.showError(this.id, message);
        } else {
          FormValidator.clearError(this.id);
        }
      }
    });
  });

  // 버튼 로딩 상태 관리
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
      if (this.getAttribute('data-loading') === 'true') {
        LoadingManager.start(this);

        // 실제 API 호출 등의 작업 시뮬레이션
        setTimeout(() => {
          LoadingManager.stop(this);
        }, 2000);
      }
    });
  });

  console.log('Common JavaScript initialized');
});