/**
 * enum
 */

export enum SampleListSearchKeys {
  ID = 'ID',
  NAME = 'NAME',
}

/**
 * type 선언
 */

/**
 * interface 선언
 */

// 조회되는 대상의 dto
export interface Sample {
  content: string;
}

// 목록인 경우 s 붙이기
// 응답받은 데이터는 Data를 후순위에 붙이기
export interface SamplesData {
  list: Sample[];
}

// Parameter 대신 Options로 통일
export interface SampleListOptions {
  searchValue: string;
  searchKey: SampleListSearchKeys;
}
