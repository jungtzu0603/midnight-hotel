/* Add guests here according to AGENTS.md. No external APIs required. */
window.HOTEL_DATA = {
  title: '第一夜：不存在的預約',
  rules: [
    '每位住客必須持有有效的入住邀請函。',
    '邀請函上的姓名必須與今晚的登記簿一致。',
    '持有黑色月亮印記的邀請函一律無效。',
    '不得因住客的外貌、種族或魔法特徵而拒絕入住。'
  ],
  guests: [
    {
      id:'guest-001', image:'assets/guest-001.png', name:'艾琳', time:'00:17', room:'207', emoji:'🧝', description:'銀髮精靈，披著藍綠色斗篷。',
      speech:'「我在森林裡迷路了……今晚還有空房嗎？」',
      invitation:{holder:'艾琳', date:'第一夜', room:'207', seal:'銀色月亮', valid:true},
      registry:{name:'艾琳', time:'00:17', room:'207', found:true},
      observation:'她的影子偶爾會變成蝴蝶形狀，但她很有禮貌。',
      allow:true,
      reactions:{allow:'「謝謝你。願月光替你照亮漫長的夜班。」',deny:'「原來連這裡，也不歡迎森林的旅人嗎……」'},
      explanation:'邀請函有效、姓名與登記簿相符、印記不是黑色。影子異常不構成違規。',
      story:'艾琳來自月光森林，她的蝴蝶影子只是精靈族的自然魔法。'
    },
    {
      id:'guest-002', image:'assets/guest-002.png', name:'鐘錶先生', time:'01:42', room:'404', emoji:'🎩', description:'身穿深色大衣，手裡握著停在 11:59 的懷錶。',
      speech:'「時間從不等人。但我等一個人，已經等了四十七年。」',
      invitation:{holder:'鐘錶先生', date:'第一夜', room:'404', seal:'黑色月亮', valid:false},
      registry:{name:'鐘錶先生', time:'01:42', room:'404', found:true},
      observation:'他的懷錶不走動；他一直詢問那位失蹤的夜班櫃檯人員。',
      allow:false,
      reactions:{allow:'「你給我的不是一間房，而是一段借來的時間。」',deny:'「守規矩的人，或許才有資格聽見那段往事。」'},
      explanation:'雖然姓名與預約相符，但黑色月亮印記依第三條守則一律無效。',
      story:'他在尋找四十七年前失蹤的人。懷錶停住的時間，正是那晚旅館最後一次留下她的紀錄。'
    },
    {
      id:'guest-003', image:'assets/guest-003.png', name:'無名少女', time:'03:33', room:'—', emoji:'🗝️', description:'穿著褪色的舊式旅館制服，胸前名牌已無法辨認。',
      speech:'「我只是想回到我原本的房間。這裡以前是我的工作地方。」',
      invitation:{holder:'未提供', date:'—', room:'—', seal:'無', valid:false},
      registry:{name:'查無紀錄', time:'03:33', room:'—', found:false},
      observation:'她出示一張舊員工證，而不是入住邀請函；她知道旅館的秘密抽屜。',
      allow:false,
      reactions:{allow:'「你還願意替我開門……但門後的記憶，不一定會歡迎我。」',deny:'「原來……現在連我也不能進去了嗎？」'},
      explanation:'員工證不能代替入住邀請函；她沒有有效邀請函，也未出現在今晚登記簿。',
      story:'她是四十七年前失蹤的前任夜班櫃檯人員。舊檔案上的姓名遭到刪除，失蹤原因仍未揭曉。'
    }
  ],
  epilogue:'在凌晨六點，登記簿自行翻到了四十七年前。某一頁的夜班員工姓名被抹去，只留下：「如果你正在閱讀這份紀錄，代表她又回來了。」'
};
