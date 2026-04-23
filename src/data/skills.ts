export interface Skill {
  id: string
  name: string
  category: 'document' | 'ui' | 'file' | 'utility'
  description: string
  trigger: string
  useCase: string
}

export const skills: Skill[] = [
  {
    id: 'docx',
    name: 'docx',
    category: 'document',
    description: 'Word文書（.docx）を読み込み、テキスト内容を抽出してClaudeが理解できる形式に変換します。',
    trigger: '.docxファイルを渡したとき',
    useCase: '企業の仕様書や要件定義書をそのままコードに反映させたいとき',
  },
  {
    id: 'pdf',
    name: 'pdf',
    category: 'document',
    description: 'PDFファイルを解析し、テキストや構造化されたコンテンツを抽出します。',
    trigger: '.pdfファイルを渡したとき',
    useCase: 'APIドキュメントや技術仕様のPDFを参照しながら実装するとき',
  },
  {
    id: 'pptx',
    name: 'pptx',
    category: 'document',
    description: 'PowerPointプレゼンテーション（.pptx）のスライド内容を読み込みます。',
    trigger: '.pptxファイルを渡したとき',
    useCase: 'プレゼン資料の内容をもとにドキュメントやコードを生成するとき',
  },
  {
    id: 'xlsx',
    name: 'xlsx',
    category: 'document',
    description: 'Excelスプレッドシート（.xlsx）のデータを読み込み、表形式データを処理します。',
    trigger: '.xlsxファイルを渡したとき',
    useCase: 'Excelで管理されているデータをデータベース定義やモデルに変換するとき',
  },
  {
    id: 'frontend-design',
    name: 'frontend-design',
    category: 'ui',
    description: 'デザインモックアップや仕様からReact/HTMLコンポーネントを生成します。UIの実装に特化した最適なアプローチを提供します。',
    trigger: 'UIコンポーネントの生成を依頼したとき、またはデザインファイルを渡したとき',
    useCase: 'Figmaデザインや手書きスケッチからコードを起こしたいとき',
  },
  {
    id: 'file-reading',
    name: 'file-reading',
    category: 'file',
    description: 'ファイルの種類に応じて適切な読み込み方法を自動選択するルーターとして機能します。',
    trigger: '任意のファイルを読み込むよう依頼したとき',
    useCase: '様々な形式のファイルを一括処理するワークフローを組みたいとき',
  },
  {
    id: 'pdf-reading',
    name: 'pdf-reading',
    category: 'file',
    description: 'PDFに特化した読み込みスキル。OCR処理や複雑なレイアウトのPDFにも対応します。',
    trigger: 'PDFを読み込むよう依頼したとき（pdf スキルの特化版）',
    useCase: 'スキャンされた手書き文書や複雑な技術PDFを処理するとき',
  },
  {
    id: 'skill-creator',
    name: 'skill-creator',
    category: 'utility',
    description: '新しいスキルのSKILL.mdファイルを作成・改善するためのスキルです。スキルの設計と実装をサポートします。',
    trigger: 'スキルを自作・改善したいとき',
    useCase: 'チーム固有のワークフローをスキルとして標準化したいとき',
  },
  {
    id: 'product-self-knowledge',
    name: 'product-self-knowledge',
    category: 'utility',
    description: 'Claude Code自身やAnthropicの製品・機能についての知識を提供します。最新の機能情報にアクセスできます。',
    trigger: 'Claude Codeの機能や仕様について質問したとき',
    useCase: 'Claude Codeでできることを確認したり、使い方を調べるとき',
  },
]

export const categoryLabels: Record<Skill['category'], string> = {
  document: 'ドキュメント',
  ui: 'UI生成',
  file: 'ファイル操作',
  utility: 'ユーティリティ',
}

export const categoryColors: Record<Skill['category'], string> = {
  document: 'info',
  ui: 'accent',
  file: 'success',
  utility: 'warning',
}
