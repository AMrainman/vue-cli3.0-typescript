/*
 * 接口函数参数类型
 */
declare namespace ApiTypes {
  export interface AddOrUpdate {
    id?: string
    parentId: string
    name: string
  }
  export interface AddOrUpdateJson {
    id?: string
    ruleId: string
    ruleJson: string
  }
  export interface EntityByName {
    name?: string
    pageSize: number
    pageNum: number
    type: string
  }
  export interface AddOrUpdateObject {
    id?: string
    name: string
    code: string
    componentType: string
    description: string
    parentId: string | string[]
    major: string
    familyName: string
    chaptersId: string | string[]
  }
  export interface AddAttributes {
    attributesId: string[]
    entityId: string
  }
  export interface DictionaryByName {
    name?: string
    pageSize: number
    pageNum: number
    type: string
  }
  export interface AddOrUpdateProperty {
    name: string
    code: string
    id?: string
    type?: string
    description?: string
  }
  export interface NlpConvert {
    sheetName: string
    querys: {
      id: string
      rule: string
    }[]
  }
  /*
   * 接口函数返回值
   */
  export interface ReturnGetTreeNode {
    children: []
    createTime: string
    createUser: null
    createUserId: null
    customAttributes: null
    id: string
    leaf: boolean
    name: string
    parentId: string
    parentName: null
    sort: null
    type: null
    updateTime: null
    updateUser: null
    updateUserId: null
  }
  export interface ReturnGetRulesData {
    columnId: string
    columnName: string
    columnSort: string
    deleteFlag: string
    id: string
    parentId: string
    rowSort: number
    sheetId: string
    sheetName: string
    status: number
    step: string
    tableName: string
    value: string
  }
  export interface ReturnGetSlotJson {
    available: number
    createTime: number
    id: string
    nl: string
    rule: string
    ruleId: string
    ruleJson: string
    updateTime: null | number
  }
  export interface ReturnUpdateRule {
    id: string
    ruleValue: string
    status: null | number
  }
  export interface ReturnChangeJsonStatus {
    available: number
    id: string
    ruleJson: string
  }
  export interface ReturnAddOrUpdateObject {
    chaptersName?: string
    chaptersId: string[]
    code: string
    componentType: string
    createTime: number
    createUser: null
    deleteFlag: null
    description: string
    familyName: string
    id: string
    major: string
    name: string
    parentId: string | string[]
    parentName: string | string[]
    updateTime: null
    updateUser: null
    version: null
  }
  export interface ReturnEntityByName<T> {
    endRow: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    isFirstPage: boolean
    isLastPage: boolean
    list: Array<T>
    navigateFirstPage: number
    navigateLastPage: number
    navigatePages: number
    navigatepageNums: null | number
    nextPage: number
    pageNum: number
    pageSize: number
    pages: number
    prePage: number
    size: number
    startRow: number
    total: number
  }
  export interface ReturnQueryAttridByEntityid {
    attributesId: string[]
  }
  export interface ReturnGetThreeTree {
    createTime: number
    id: string
    leaf: boolean
    name: string
    parentId: string
    parentName: null
  }
  export interface ReturnAddOrUpdate {
    code: string,
    createTime: number
    deleteFlag: string
    description: null
    id: string
    name: string
    type: string
  }
  export interface ReturnDictionaryByName<T> {
    endRow: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    isFirstPage: boolean
    isLastPage: boolean
    list: T[]
    navigateFirstPage: number
    navigateLastPage: number
    navigatePages: number
    navigatepageNums: number[]
    nextPage: number
    pageNum: number
    pageSize: number
    pages: number
    prePage: number
    size: number
    startRow: number
    total: number
  }
}
